-- 입사일이 1993년 2월 19일 이면서 1964년 10월 24일인 직원의 이름을 구하고,
-- 다시 해당 이름으로 조건을 검색해서 사번(emp_no)을 구해야 하는 경우

SELECT first_name, LAST_name FROM  employees
WHERE hire_date = '1993-02-19'
AND birth_date = '1964-10-24';

SELECT emp_no FROM employees
WHERE first_name = 'conrado'
AND last_name = 'Serra';

-- 서브쿼리 사용
SELECT emp_no FROM employees
WHERE first_name =(SELECT first_name 
					FROM employees
					WHERE hire_date = '1993-02-19'
					AND birth_date = '1964-10-24')
AND last_name = (SELECT last_name
				FROM employees
				WHERE hire_date = '1993-02-19'
				AND birth_date = '1964-10-24');

SELECT emp_no
FROM employees
where (first_name, last_name) = (SELECT first_name, last_name
								FROM employees
								WHERE hire_date = '1993-02-19'
								AND birth_date = '1964-10-24');

-- 직원중에서 emp_no가 가장 높은 직원 찾기
SELECT first_name, last_name
FROM employees
WHERE emp_no = (SELECT max(emp_no)
				FROM employees);

SELECT max(emp_no), first_name, last_name
FROM employees
GROUP BY first_name, last_name, emp_no
ORDER BY emp_no desc
LIMIT 1;

SELECT first_name, last_name
FROM employees
ORDER BY emp_no DESC
LIMIT 1;

SELECT first_name, last_name
FROM employees
WHERE hire_date = (SELECT Min(hire_date) FROM employees);
					
SELECT Min(hire_date) FROM employees;

-- 전체 평균보다 높은 연봉을 받는 직원 번호, 이름 조회
SELECT emp_no, first_name, last_name
FROM employees e
WHERE emp_no = (SELECT emp_no FROM salaries s
ORDER BY salary DESC
LIMIT 1);

SELECT first_name, last_name
FROM employees
WHERE emp_no >= (SELECT avg(emp_no)
				FROM employees) -- 평균 사번보다 높은 직원의 이름만 출력

SELECT *
FROM employees e
WHERE hire_date > (SELECT avg(hire_date)
					FROM employees
					WHERE emp_no = e.emp_no);

SELECT emp_no, salary
FROM salaries
WHERE salary;

SELECT salary
FROM salaries s
ORDER BY salary DESC;