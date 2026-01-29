#include <stdio.h>
#include <stdlib.h>

int balance = 100000; // 초기 잔액
int pin = 1234;       // 비밀번호

void checkBalance() {
    printf("현재 잔액: %d원\n", balance);
}

void deposit() {
    int amount;
    printf("입금할 금액: ");
    scanf("%d", &amount);
    balance += amount;
    printf("%d원 입금 완료\n", amount);
}

void withdraw() {
    int amount;
    printf("출금할 금액: ");
    scanf("%d", &amount);
    if(amount > balance){
        printf("잔액이 부족합니다.\n");
    } else {
        balance -= amount;
        printf("%d원 출금 완료\n", amount);
    }
}

int main() {
    int inputPin, choice;

    printf("ATM에 오신 것을 환영합니다!\n");
    printf("비밀번호를 입력하세요: ");
    scanf("%d", &inputPin);

    if(inputPin != pin) {
        printf("비밀번호가 틀렸습니다.\n");
        return 0;
    }

    while(1) {
        printf("\n===== ATM 메뉴 =====\n");
        printf("1. 잔액 확인\n");
        printf("2. 입금\n");
        printf("3. 출금\n");
        printf("4. 종료\n");
        printf("선택: ");
        scanf("%d", &choice);

        switch(choice) {
            case 1: checkBalance(); break;
            case 2: deposit(); break;
            case 3: withdraw(); break;
            case 4: 
                printf("ATM을 종료합니다.\n");
                exit(0);
            default:
                printf("잘못된 선택입니다.\n");
        }
    }

    return 0;
}