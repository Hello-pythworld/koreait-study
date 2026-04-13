print("hi")

a = 10
if a > 20 :
    print("양수")
    print("아직 if문 안에 있음")
elif a > 30:
    print("30보다 큼.")
else:
    print("그 외")

print("밖에 있음.")

numbers = [1, 2, 3, 4, 5]
for num in numbers:
    print(num)

for num in range(1, 11):
    print(num)

names = ['kim', 'lee', 'park', 'choi', 'min', 'jung', 'jeon']

print(names[2])
print(names[4])
print(names[-4])
print(names[-6])

# 슬라이싱
#   - 인덱스를 활용하여 특정 요소를 추출하거나 잘라내는 기능
example = [1, 2.2, True, "Y"]

print(example[0:2])
print(example[0:4:3])
print(example[:])

# 리스트 요소 추가
#   1. append
#   2. extend
#   3. insert

# append
#   -  리스트의 끝에 요소 1개 추가
list_append = [1, 2, 3]
list_append.append(4)
print(list_append)

# extend
#   - 리스트를 연결 시킴
list_extend = [1, 2, 3]
list_extend.extend([4, 5])
print(list_extend)

# insert
#   - 특정 인덱스에 요소를 추가
list_insert = [1, 2, 3]

list_insert.insert(1, 4)
print(list_insert)

#리스트 요소 삭제
#   1. pop
#   2. remove

# pop
#   - 특정 인덱스를 가진 요소 삭제
#   - 삭제한 요소를 반환
list_pop = [1, 2, 3]
result = list_pop.pop(1)
print(list_pop)
print(result)

# remove
#   - 특정 값을 가진 요소 삭제
list_remove = ["red", "green", "blue"]
result = list_remove.remove("green") # 삭제한 요소 반환 안함.
print(result)
print(list_remove)

# clear
#   - 전체 삭제
list_clear = [1, 2, 3]
list_clear.clear()
print(list_clear)

#len()
#   - 길이를 반환해주는 내장 함수
cs = ["데이터", "알고리즘", "파이썬"]
cs_length = len(cs)
print(cs_length)

for i in range(len(cs)):
    print(cs[i])

# 리스트.sort()
#   - 리스트를 정렬시켜주는 메서드
#   - 원본이 변경됨
#   - 기본 동작 : 오름차순
list_sort = [2, 6, 4, 3, 9, 1]
list_sort.sort()
print(list_sort)

list_sort.sort(reverse=True) # 내림차순
print(list_sort)

# sorted()
#   - 리스트 정렬해주는 내장 함수, 기본 동작 오름차순
#   - 원본 리스트는 영향을 받지 않음.(정렬도니 새로운 리스트 반환)
numbers = [3, 2, 7, 6, 5, 9]
result = sorted(numbers)
print("원본 : ", numbers)
print("정렬 후 : ", result)

# ------------------------------------------------
# 튜플
#   - 리스트와 거의 동일한 자료구조
#   - 불변 특징을 가짐(readOnly)
names = ["kim", "lee", "park"]
print(names[1])

names[0] = "a";

tuple_alphabet = ("a", "a", "b", "b", "c", "c", "d", "d", "e")

print(tuple_alphabet.count("b")) # 요소의 개수
print(tuple_alphabet.count("c")) # 요소의 인덱스(가장 앞에 있는)

#------------------------------------------------------------------
# 세트(set)
#   - 순서가 없고, 중복을 허용하지 않는 자료구조
numbers = [1, 6, 3, 3, 2, 5, 4, 3, 2]

set_numbers = set(numbers) #set으로 변환 - 중복 제거
print("set 변환 : ", set_numbers)

list_numbers = list(set_numbers)
print("list 변환 : ", list_numbers)

print(f"list 변환 : ${list_numbers}")

list_numbers.sort() # 정렬
print(list_numbers)
#--------------------------------------------------------------------
# 딕셔너리
#   - 키와 값으로 이루어진 자료구조
sports_star = {
    "축구": "손흥민",
    "야구": "이정후",
    "피겨스케이팅": "김연아",
    "수영": "박태환"
}

sports_star["축구"] = "박지성"
print(sports_star)

print(sports_star.keys()) # 딕셔너리의 키 가져오기
for key in sports_star.keys():
    print(f"꺼낸 키 : {key}")
    print(f"값 꺼내기 : {sports_star[key]}")

print(sports_star.values()) # 딕셔너리의 값 가져오기

print(sports_star.items()) # 딕셔너리의 키-값 가져오기

#[('축구', '박지성'), ('야구', '이정후'), ('피겨스케이팅', '김연아'), ('수영', '박태환')]
# _는 저장하지 않겠다는 의미를 가짐.
for key, value in sports_star.items():
    print(key)
    print(value)

#------------------------------------------------------------------------------------
numbers = [1,2,3]
it = iter(numbers)

print(next(it))
print(next(it))
print(next(it))
print(next(it))
