SELECT emp_no AS '사번', salary / 12 AS '월급' FROM salaries s ;
SELECT emp_no + 50, first_name FROM employees
WHERE first_name ='길동';

SELECT DISTINCT gender FROM  employees;0

-- salaries 테이블에서 salary 컬럼의 값을 월급이라고 가정
-- 1. 월급(기존값)
-- 2. 예상 연봉(salary * 12) 별칭은 "예상 연봉"
-- 3. 5% 인상 후의 예상 연봉(salary * 12 * 1.05) 별칭은 "인상 후 예상 연봉"

SELECT salary FROM salaries;

SELECT (salary * 12) AS '예상 연봉' FROM salaries;

SELECT (salary * 12 * 1.05) AS '인상 후 예상 연봉' FROM salaries;

SELECT emp_no, salary, from_date, to_date FROM salaries
WHERE salary >= 80000

SELECT * FROM employees
WHERE emp_no <10005;


-- 입사일이 1960 년 1월 1일 이후이면서 성별이 남자인 직원 조회

SELECT * FROM employees
WHERE hire_date >'1960-01-01'
AND gender = 'M';

SELECT * FROM titles
WHERE title = 'Senior Engineer'
OR title = 'Engineer';

-- salaries 테이블에서 연봉이 50000 이상이면서 60000 이하인 직원 조회
SELECT * FROM salaries
WHERE salary >= 50000 AND salary<=60000;

-- salaries 테이블에서 연봉이 50000 이상이면서 60000 이하인 직원 조회
SELECT * FROM salaries s 
WHERE salary BETWEEN 50000 AND 60000;

SELECT * FROM employees
WHERE hire_date BETWEEN '1995-01-01' AND '1995-12-31';

SELECT * FROM employees
WHERE first_name LIKE 'N%';

SELECT * FROM employees
WHERE first_name LIKE '%en';

SELECT * FROM employees
WHERE first_name LIKE '%ar%';

SELECT * FROM employees
WHERE first_name LIKE '_di';

SELECT * FROM employees
WHERE first_name LIKE 'G__';