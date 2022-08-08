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

# branch
1. 생성 : 터미널에서 "git branch 브랜치명"입력
- 현재 커밋의 사본임
2. 이동 : git switch coupon

commit1 - commit 2
          commit 2-1 :branch 생성
          
3. 지금까지 한 것들 보고싶으면 git log
- 한 눈에 보기 쉽게 하려면 git log --oneline --all --graph
- git log 나가고 싶으면 q버튼 

4. coupon 브랜치 코드를 master(main) 브랜치에 합치고 싶다
1) master 브랜치로 이동
2) git merge coupon
- 주의 :  같은 파일의 같은 줄을 수정하고 합치면 충돌이 일어남!
3) conflict 해결법
- 원하는 코드만 남기고(또는 vscode에서 선택) git add > git commit 

5. 협업에서 사용 시 각자 브랜치 생성 후 코드를 수정하고 나중에 합쳐서 적용!

# 다양한 merge 방법 

1. 3-way-merge : 각 브랜치에 신규 commit이 있는 경우(수정된 메인 커밋과 수정된 브런치 커밋을 합쳐 새로운 커밋을 만드는 것)
commit1 - commit 2 - commit3 ------
          commit 2-1 commit 2-2----
          
2. fast-forward merge : 메인브랜치는 신규커밋이 없는 경우
commit1 - commit 2
          commit 2-1 commit 2-2(니 이름은 이제 main브랜치여) : 새로운 변경 내용은 이 브랜치에 다 있기 때문
- 싫으면 git merge --no-ff 브랜치명 : 3-way merge해줌         

3. 브랜치 삭제
- merge 완료된 브랜치 삭제는 : git branch -d 브랜치명
- merge 안한 브랜치 삭제는 : git branch -D 브랜치명

4. rebase : 신규 브랜치의 시작점을 다른 커밋(최근 처밋)으로 옮길 수 있음 => 이후 fast-forward merge
commit1 - commit 2 - commit3 
                     commit 2-1 commit 2-2----
이거를
commit1 - commit 2 - commit3 - commit 2-1 commit 2-2 이렇게 깔끔하게 커밋할수있음 (git history 깔끔해보임)
- 단점 : conflict 엔딩 많이 남
- 사용법 : 
1) 새로운 브랜치로 이동해서
2) git rebase master(중심브랜치명) > 커밋 시작점 옮김
3) master(중심브랜치명) 브랜치로 이동해서
4) git merge 새로운 브랜치명

5. squash and merger : git log를 깔끔하게 쓰고 싶을 때
- 3-way merge하면 history 더러워짐
- main branch git log 에 합쳐빈 branch의 잔챙이 commit 다 나옴
- main branch log만 보고 싶으면 branch 선 끊어 놓음 => rebase 또는 squash 사용

commit1 - commit 2 - commit3 - commit4(commit 2-1 commit 2-2 commit 3 다 합쳐서 메인에 새로운 커밋으로 뿅 바꿔줌) 선이 이어지지 X
- git merge --squash 새브런치

6. 적용 : 언제 어떻게?
- 팀/회사의 branching/merge 가이드를 따라가면 됨
- ex. 안중요한 브랜치는 squash
- ex. feature/ develop 브랜치는 3-way merge..


# git revert, reset, restore
1. 파일 복구하는 법
2. git resotre c(파일 명)
- c파일이 최근 커밋 상태로 돌아감
- 특정 시점(git log의 커밋아이디)의 커밋 상태로 돌아가고 싶은 경우 git restore --source 커밋아이디 파일 명
- git restore --staged c : staging취소도 가능 

3. commit 취소하는 법
- git 은 과거 조작 못함
- 특정 커밋을 취소하는 커밋은 가능
- git revert 커밋아이디1 커밋아이디2 2개도 가능 최근껀 HEAD
- merge commit 도 취소 가능

4. git reset --hard 커밋아이디
** 해당 키워드는 협업시엔 사용 금지
- (soft는 변동사항 지우지 말고 스테이징 할 수 있음)
- mixed는 변동사항 지우지 말고 unstage해놓기
