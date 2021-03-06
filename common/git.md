---
sidebarDepth: 3
---

# git 관련 질문 요모조모

## 질문들

### reset과 revert 차이

<Detail>

#### reset

`HEAD`가 삭제되며,이후에 한 커밋들은 모두 삭제됩니다.  
고로 되돌릴 수 없으니, 공용브랜치에서는 사용안하는 것이 좋습니다.

보통 특정 커밋을 사용하지않을때 사용하게 됩니다.

#### revert

변경사항이 생겨서 취소하는 커밋을 남깁니다.
`rollback`하는 이력이 남기때문에 비교적 안전합니다.

</Detail>

### merge, rebase, squash의 차이

<Detail>

#### merge

변경 이력(`commit`) 전체를 합칩니다.  
변경 이력들을 `refer`하는 요소가 생성되는데, 이를 `m`으로 지칭하겠습니다.

이 `m`을 통해 합쳐지며, `m`은 2개의 `parent`를 갖게 됩니다.

#### rebase

모든 변경 이력(`commit`)이 각 각 합쳐집니다.
각 변경 이력(`commit`)가 따로 따로 추가되기에, 각 `commit`들이 하나의 `parent`를 지닌다.

그러기에 `merge`기록이 남지 않으며, 하나의 브랜치에서 작업한 것처럼 보여진다.

#### squash

변경 이력(`commit`)을 합치는데 하나의 parent로 만듭니다.
변경 이력들을 합친 하나의 새로운 `commit`이 생기며  
이를 통해 합쳐집니다.

그러기에 하나의 `parent`가 생깁니다.

일반적으로 `feature`브랜치의 `commit history`를 합쳐 깔끔하게 정리하기 위해 사용한다고 한다.

</Detail>

### Cherry Pick

<Detail>

관용적인 뜻으로 "최고를 선별하다."라는 뜻을 지닌다.

다른 브랜치에 있는 `commit`을 특정 브랜치에 적용시킬 때 사용한다.  
이럴 때 `git rebase`를 사용할 수도 있지만, 이는 현재 브랜치에서만 사용 가능하다.

> git cherry-pick [commit_hash1] [commit_hash2]

와 같은 방법으로 사용한다.

#### Conflict가 발생한 경우

`Cherry pick` 또한 코드를 합치는 과정이기에 `Conflict`가 발생할 수 있다.

충돌을 해결한 이후 `add` 한 다음 `--continue`를 `cherry-pick`에 붙여주면 된다.

> get add [path]
> git cherry-pick --continue

#### Cherry Pick을 중단할 때

> git cherry-pick --abort

</Detail>
