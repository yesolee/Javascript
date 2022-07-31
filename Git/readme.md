# Git 버전관리 소프트웨어
1. 과거로 빠꾸가능
2. 과거 작업내용 열람 가능 등.. 안정적인 개발 가능

(1) vs code에서 폴더열기
(2) 터미널에서 git init
(3) 파일 현재상태를 기록해두려면 : 버전생성 
- 기록할 파일을 고르고(staging) git add 파일명 : staging area로 파일을 옮겨줌 
- 고른 파일을 저장 : git commit -m '메모' : repository(저장소)로 파일을 옮겨줌
=> img 같이 버전이 필요없는 파일도 있기때문에 git add를 이용해 파일을 골라줌
=> 여러 파일을 스테이징 하려면 : git add 파일1 파일2..
git add app.txt app2.txt
=> 모든 파일 스테이징 하려면 git add .
=> 상태창 열기 : git status
=> commit 내역 조회 : git log --all --online
=> 참고 : commit하는 주기 : 간단한 기능을 만들거나 기능을 수정했을때,
작업 덩어리 별루!! 3초마다 하는거 아님 ㅋㅋ
=> git diff : 최근 commit vs 현재파일 차이점 보여줌
터미널에서 git diff but 버그 많음 스페이스바, 엔터키까지 인식해서
터미널에 git difftool => vim 에디터 (h,j,k,l키가 방향키 q또는 qa는 종료단축키)
git log --online --all에 나오는 노란색 첫번째 단어 : 커밋 아이디
git difftoll 커밋아이디1 커밋아이디2 : 특정 커밋 2개 비교 가능
git difftool도 별로임 vscode extentions가 더 편함
