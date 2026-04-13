import tensorflow as tf
import numpy as np

#TensorFlow 모델을 생성하는 함수
#   - Spring의 @Bean과 유사한 역할을 수행
def loadTsModel():
    """
        간단한 선형 모델을 생성하는 함수
        수식: y = Wx + b
        여기서는 W=2, b=0으로 설정하여 y = 2x를 계산함.
    """

    # 모델 생성
    model = tf.keras.models.Sequential([
        # units = 출력 노드를 1개로 하겠다.
        # input_shpae(1,) = 입력값 1개(x 하나)
        tf.keras.layers.Dense(units=1, input_shape=(1,))
    ])

    # 학습 없이 직접 weight 설정
    model.set_weights([
        tf.constant([[2]]),    # weight (W = 2)
        tf.constant([0])     # bias   (b = 0)
    ])

    return model
