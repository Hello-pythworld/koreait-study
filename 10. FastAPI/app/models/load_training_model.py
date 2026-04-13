import tensorflow as tf
import numpy as np

# 1. 학습 데이터
# X: 공부 시간
X = np.array([1, 2, 3, 4, 5], dtype=float)

# Y: 시험 점수
Y = np.array([50,55, 65, 70, 80], dtype=float)

# 2. 모델 생성
#   - Sequential : 레이어를 쌓는 가장 기본적인 모델 구조
#   - Dense(1) : 레이어를 1개만 사용하겠다. (출력 노드 1개, 결과값도 1개)
#   - input_shpae(1,) : 입력값을 1개만 받겠다.
#   - y = Wx + b
#   > W : weight(가중치)
#   > b : bias (편향치)
model = tf.keras.models.Sequential([
    tf.keras.layers.Dense(1, input_shape=(1,))
])

# 3. 컴파일 (학습 과정)
#   - compile : "학습을 어떻게 할거냐" 정의하는 단계
#   - optimizer : 어떤 알고리즘을 사용할지 정함.
#       > learning_rate=0.01 : 한번 업데이트할 때마다 얼마나 이동할지
#   - loss : 예측값과 실제값의 차이를 제곱해서 평균낸 값
model.compile(
    optimizer=tf.keras.optimizers.SGD(learning_rate=0.01),
    loss="mse"
)

# 4. 사용자로부터 입력받기
epochs = int(input("학습 횟수 입력 : "))

# 5. 학습 진행 + 로그 출력
for epoch in range(epochs):
    history = model.fit(X, Y, epochs=1, verbose=0) # 실제 학습하는 부분
    loss = history.history["loss"][0]
    w, b = model.layers[0].get_weights()

    print(f"Loss : {loss}")
    print(f"Weights : {w}")
    print(f"Bias : {b}")
    print("-"*30)
# 6. 예측 테스트
test_hour = 6
pred = model.predict(np.array([test_hour]))
print(f"공부 시간 {test_hour} -> 예측 점수 : {pred[0][0]}:.2f")