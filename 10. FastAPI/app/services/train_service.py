import tensorflow as tf
import numpy as np
import os
import subprocess


class TrainService:

    def train(self, epochs: int):

        # -----------------------------
        # 데이터 준비
        # -----------------------------
        X = np.array([[1],[2],[3],[4],[5]], dtype=np.float32)
        Y = np.array([[50],[60],[70],[80],[90]], dtype=np.float32)

        # -----------------------------
        # 모델 생성
        # -----------------------------
        model = tf.keras.Sequential([
            tf.keras.Input(shape=(1,), name="input"),
            tf.keras.layers.Dense(1)
        ])

        model.compile(
            optimizer=tf.keras.optimizers.SGD(0.01),
            loss="mse"
        )

        # -----------------------------
        # 학습
        # -----------------------------
        history = model.fit(X, Y, epochs=epochs, verbose=0)
        final_loss = history.history["loss"][-1]

        # -----------------------------
        # Weight / Bias
        # -----------------------------
        W, b = model.layers[0].get_weights()

        weight = W[0][0]
        bias = b[0]

        # -----------------------------
        # TF 예측
        # -----------------------------
        test_input = np.array([[10.0]], dtype=np.float32)

        prediction = model.predict(
            test_input,
            verbose=0
        )[0][0]

        # -----------------------------
        # 모델 저장 경로
        # -----------------------------
        os.makedirs("app/models", exist_ok=True)

        tf_path = "app/models/saved_model"
        onnx_path = "app/models/model.onnx"

        # -----------------------------
        # Signature 강제 고정
        # -----------------------------
        @tf.function(
            input_signature=[
                tf.TensorSpec([None, 1], tf.float32, name="input")
            ]
        )
        def serving_fn(x):
            return {"output": model(x)}

        tf.saved_model.save(
            model,
            tf_path,
            signatures={"serving_default": serving_fn}
        )

        # -----------------------------
        # ONNX 변환
        # -----------------------------
        subprocess.run([
            "python",
            "-m",
            "tf2onnx.convert",
            "--saved-model", tf_path,
            "--output", onnx_path,
            "--opset", "13"
        ])

        # -----------------------------
        # DTO 반환
        # -----------------------------
        return {
            "final_loss": float(final_loss),
            "weight": float(weight),
            "bias": float(bias),
            "prediction": float(prediction)
        }


train_service = TrainService()
