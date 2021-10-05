# **Bootstrap**

부트스트랩은 웹의 제작을 도와주는 HTML, CSS, JS 프레임워크이다.  

부트스트랩에서 사전 정의된 함수 혹은 클래스를 따라서 입력하기만 하면 다양한 스타일의 요소들을 손쉽게 사용할 수 있다.

<a href="https://getbootstrap.kr/">Bootstrap</a>

<br/>
<br/>

# **부트스트랩 시작하기**
## **CSS 링크 연결**
  ```html
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-F3w7mX95PdgyTmZZMECAngseQB83DfGTowi0iMjiWaeVhAn4FJkqJByhZMI3AhiU" crossorigin="anonymous">
  ```  

## **JS 링크 연결**
부트스트랩은 Popper 라이브러리를 필요로 하기 때문에 함께 연결을 해주어야 한다.  
두 가지 선택지가 있는데, 부트스트랩과 popper를 한 번에 불러오는 방법과 따로 불러오는 방법이다.  
따로 불러올 때는 반드시 popper를 먼저 불러와야 한다.

  ```html
  <!-- 한 번에 불러오기 -->
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/js/bootstrap.bundle.min.js" integrity="sha384-/bQdsTh/da6pkI1MST/rWKFNjaCP5gBSY4sEBT38Q/9RBh9AH40zEOg7Hlq2THRZ" crossorigin="anonymous"></script>

  <!-- 따로 불러오기 -->
  <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.3/dist/umd/popper.min.js" integrity="sha384-W8fXfP3gkOKtndU4JGtKDvXbO53Wy8SZCQHczT5FMiiqmQfUpWbYdTil/SxwZgAN" crossorigin="anonymous"></script>

  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/js/bootstrap.min.js" integrity="sha384-skAcpIdS7UcVUC05LJ9Dxay8AXcDYfBJqt1CJ85S/CFujBsIzCIv+l9liuYLaMQ/" crossorigin="anonymous"></script>
  ```
## **npm 프로젝트로 시작**
1. 부트스트랩 설치  
`$ npm install bootstrap@next` 

2. JS와 CSS(SCSS) 파일을 HTML에 연결  

3. JS에서 부트스트랩 import  
`import bootstrap from "bootstrap/dist/js/bootstrap.bundle"`

3. CSS(SCSS)에서 부트스트랩 import(아래는 SCSS 예시)  
`@import "../node_modules/bootstrap/scss/bootstrap";
`

<br/>
<br/>
위 작업을 완료하였다면 <a href="https://getbootstrap.kr/">Bootstrap</a> 페이지의 문서에서 소개되는 다양한 컴포넌트 등을 본격적으로 사용해 볼 수 있다.


<br/>
<br/>

# **버튼 & 버튼 그룹**
## **버튼**
```html
<button type="button" class="btn btn-primary">Primary</button>
<button type="button" class="btn btn-secondary">Secondary</button>
<button type="button" class="btn btn-success">Success</button>
<button type="button" class="btn btn-danger">Danger</button>
<button type="button" class="btn btn-warning">Warning</button>
<button type="button" class="btn btn-info">Info</button>
<button type="button" class="btn btn-light">Light</button>
<button type="button" class="btn btn-dark">Dark</button>
<button type="button" class="btn btn-link">Link</button>
```
위 내용으로 해당하는 스타일의 버튼을 생성할 수 있다.  

### **테두리 있는 버튼**
`btn btn-outline-primary` 와 같이 `outline` 키워드를 붙여서 테두리가 있는 버튼을 생성할 수 있다.

### **버튼 크기**
`btn-lg` 혹은 `btn-sm` 클래스를 추가하여 더 크거나 작은 버튼을 생성할 수 있다.

### **비활성화**
`disabled` 속성을 추가하여 버튼을 비활성화 할 수 있다.

<br/>

## **버튼 그룹**
```html
<div class="btn-group">
  <button type="button" class="btn btn-info">Info</button>
  <button  utton type="button" class="btn btn-light">Light</button>
  <button type="button" class="btn btn-dark">Dark</button>
</div>
```
`btn-group` 클래스 요소로 버튼을 묶어서 여러 버튼을 하나로 이어 붙일 수 있다.

<br/>
<br/>

# **드롭다운**
드롭다운 메뉴를 생성할 때는 드롭다운의 트리거가 될 라벨과 드롭다운의 각 항목인 리스트가 필요하다.  

드롭다운의 작성은 `".dropdown"` 혹은 `position: relative;` 속성을 갖는 요소 내부에서 시작한다.  

트리거는  `<a>` 태그 혹은 앞서 나온 `<button>` 요소를 사용할 수 있다. 버튼의 종류와 크기도 앞서 나온 방법으로 지정할 수 있다.

드롭다운의 각 항목들은 모두 `<ul class="dropdown-menu">` 태그로 묶여있으며 각 항목은 이 `<ul>` 태그의 자식인 `<li>` 태그 내부에 `.dropdown-item` 클래스로 작성된다.
```html
<div class="dropdown">
  <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
    Dropdown button
  </button>
  <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
    <li><a class="dropdown-item" href="#">Action</a></li>
    <li><a class="dropdown-item" href="#">Another action</a></li>
    <li><a class="dropdown-item" href="#">Something else here</a></li>
  </ul>
</div>
```
아래 내용을 목록에 추가하여 항목 사이에 구분선을 추가할 수 있다.
```html
<li><hr class="dropdown-divider"></li>
```
아래 코드로 버튼과 별개로 동작하는 드롭다운을 만들 수 있다.  

기존 드롭다운은 버튼을 클릭하여 드롭다운을 확장하는데, 이 방법 버튼 옆에 달린 화살표를 클릭하여 드롭다운을 확장하고 버튼은 다른 기능을 갖도록 만들 수 있다.
```html
<!-- Example split danger button -->
<div class="btn-group">
  <button type="button" class="btn btn-danger">Action</button>
  <button type="button" class="btn btn-danger dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
    <span class="visually-hidden">Toggle Dropdown</span>
  </button>
  <ul class="dropdown-menu">
    <li><a class="dropdown-item" href="#">Action</a></li>
    <li><a class="dropdown-item" href="#">Another action</a></li>
    <li><a class="dropdown-item" href="#">Something else here</a></li>
    <li><hr class="dropdown-divider"></li>
    <li><a class="dropdown-item" href="#">Separated link</a></li>
  </ul>
</div>
```
이 밖에 `.dropup`, `.dropend`, `.dropstart` 등을 추가하여 드롭다운 확장 방향을 지정할 수 있다.

<br/>
<br/>

# **리스트 그룹**
리스트 그룹을 통해 리스트 내용을 꾸미거나 다양한 기능을 부여할 수 있다.
```html
<ul class="list-group">
  <li class="list-group-item">An item</li>
  <li class="list-group-item">A second item</li>
  <li class="list-group-item">A third item</li>
  <li class="list-group-item">A fourth item</li>
  <li class="list-group-item">And a fifth one</li>
</ul>
```
아이템에 `.active`를 추가하여 강조 효과를 부여할 수 있다.

`.disabled`를 추가하여 비활성화가 가능하다.

`<li>` 대신 `<a>` 와 `<button>` 을 사용하여 클릭이 가능하도록 만들 수 있다. 여기서 사용하는 버튼은 앞에 나온 버튼과 사용법이 다르다.

또한 각 아이템에 `.list-group-item-action` 를 추가하여 호버 효과를 적용할 수 있다.

## **버튼을 사용한 리스트 그룹**
```html
<div class="list-group">
  <button type="button" class="list-group-item list-group-item-action active" aria-current="true">
    The current button
  </button>
  <button type="button" class="list-group-item list-group-item-action">A second item</button>
  <button type="button" class="list-group-item list-group-item-action">A third button item</button>
  <button type="button" class="list-group-item list-group-item-action">A fourth button item</button>
  <button type="button" class="list-group-item list-group-item-action" disabled>A disabled button item</button>
</div>
```

## **링크를 사용한 리스트 그룹**
```html
<div class="list-group">
  <a href="#" class="list-group-item list-group-item-action active" aria-current="true">
    The current link item
  </a>
  <a href="#" class="list-group-item list-group-item-action">A second link item</a>
  <a href="#" class="list-group-item list-group-item-action">A third link item</a>
  <a href="#" class="list-group-item list-group-item-action">A fourth link item</a>
  <a class="list-group-item list-group-item-action disabled">A disabled link item</a>
</div>
```
리스트 그룹의 최상위 요소에 `.list-group-flush` 를 추가하여 구분선을 제외한 모든 테두리를 제거할 수 있다.

이 외에 숫자 구분점, 수평 정렬, 색상 추가 등 다양한 기능이 있으며, 자세한 내용은 부트스트랩 홈페이지 참조.

<br/>
<br/>

# **폼**
`<form>` 태그에 대한 댜양한 스타일을 지정할 수 있다.  

`.form-text` 는 희미한 글씨로 출력될 도움말 같은 텍스트를 나타낸다.  

`<fieldset>` 태그를 만들고 `disabled` 속성을 추가하면 이 태그의 하위 input은 모두 비활성화 된다.  

`.form-control-lg` 와 `.form-control-sm` 으로 크기를 지정할 수 있다.  

`<input>` 태그에 `disabled` 속성을 추가하여 비활성화 할 수 있고 `readonly` 속성으로 읽기 전용으로 만들 수 있다.
## **로그인**
이메일과 패스워드 등 로그인과 관련된 input 스타일도 정의되어 있다.
```html
<form>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1">
  </div>
  <div class="mb-3 form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1">
    <label class="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
```

## **파일 첨부**
`file` 타입의 input에 대한 스타일도 정의되어 있다.
```html
<!-- 단일 파일 -->
<div class="mb-3">
  <label for="formFile" class="form-label">Default file input example</label>
  <input class="form-control" type="file" id="formFile">
</div>

<!-- 복수 파일 -->
<div class="mb-3">
  <label for="formFileMultiple" class="form-label">Multiple files input example</label>
  <input class="form-control" type="file" id="formFileMultiple" multiple>
</div>
```

<br/>
<br/>

# **입력 그룹**
input 요소의 좌우에 텍스트, 버튼, 버튼 그룹 등을 추가할 수 있다.

## **텍스트 추가**
`.input-group` 내부에 `<input>`를 넣고 형제 요소로 `.input-group-text`를 넣는다.  

순서에 따라 텍스트가 input 앞에 위치할지 뒤에 위치할지가 결정된다.

`.input-group` 으로 묶여있기 때문에 복수의 input 사이에 텍스트를 추가하는 것도 가능하다.
```html
<div class="input-group mb-3">
  <span class="input-group-text" id="basic-addon1">@</span>
  <input type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1">
</div>
```

`.input-group`에 `.input-group-sm`, `.input-group-lg`를 추가하여 크기를 지정할 수 있다.  

이 크기는 그룹 내 모든 요소에 적용되며, 개별로 조절하는 것은 불가능하다.

`.input-group`은 기본적으로 `flex-wrap: wrap`이 선언되어 있다.   
`.flex-nowrap`을 추가하여 비활성화가 가능하다.

텍스트와 비슷한 방법으로 체크박스, 라디오 버튼, 버튼, 드롭다운을 추가할 수 있다.

<br/>

## **체크박스 & 라디오 버튼 추가**
`.input-group-text` 자식요소로에 체크박스 혹은 라디오 버튼을 작성하여 추가할 수 있다.
```html
<!-- 체크박스 -->
<div class="input-group mb-3">
  <div class="input-group-text">
    <input class="form-check-input mt-0" type="checkbox" value="" aria-label="Checkbox for following text input">
  </div>
  <input type="text" class="form-control" aria-label="Text input with checkbox">
</div>

<!-- 라디오 버튼 -->
<div class="input-group">
  <div class="input-group-text">
    <input class="form-check-input mt-0" type="radio" value="" aria-label="Radio button for following text input">
  </div>
  <input type="text" class="form-control" aria-label="Text input with radio button">
</div>
```

<br/>

## **버튼 추가**
`.input-group` 내부에 `.input-group-text` 대신 `<button>` 태그가 직접 들어온다.
```html
<div class="input-group mb-3">
  <button class="btn btn-outline-secondary" type="button" id="button-addon1">Button</button>
  <input type="text" class="form-control" placeholder="" aria-label="Example text with button addon" aria-describedby="button-addon1">
</div>
```

<br/>

## **드롭다운 추가**
버튼과 마찬가지로 `.input-group-text` 는 생략되고 드롭다운 요소들이 직접 들어온다. 

앞서 나온 드롭다운 버튼 분할 버전도 사용 가능하다.
```html
<div class="input-group mb-3">
  <button class="btn btn-outline-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">Dropdown</button>
  <ul class="dropdown-menu">
    <li><a class="dropdown-item" href="#">Action</a></li>
    <li><a class="dropdown-item" href="#">Another action</a></li>
    <li><a class="dropdown-item" href="#">Something else here</a></li>
    <li><hr class="dropdown-divider"></li>
    <li><a class="dropdown-item" href="#">Separated link</a></li>
  </ul>
  <input type="text" class="form-control" aria-label="Text input with dropdown button">
</div>
```

<br/>
<br/>

# **Modal**
모달 윈도우를 구현할 수 있다.  

모달의 트리거로 사용할 `<button>` 에 속성 `data-bs-toggle="modal" data-bs-target="#exampleModal"`을 부여한다.  

`data-bs-target="#exampleModal"` 속성은 값으로 id 선택자를 전달하는데, 버튼을 클릭하면 이 id의 요소가 모달 윈도우로 출력되는 구조를 갖고 있다.

모달 윈도우 요소는 `.modal fade` 클래스를 갖고 있으며, `tabindex="-1"`이 부여되어있다.  

하위 요소로 `.modal-dialog > .modal-content` 가 있으며 그 안에는 헤더와 바디, 푸터로 모달로 출력할 내용이 작성된다.

아래 예시에서 헤더의 버튼에 `data-bs-dismiss="modal"` 속성이 부여되어 있는데, 이 속성은 모달 트리거 버튼에 부여된 `data-bs-toggle="modal"` 과 반대되는 속성이다. 두 속성은 각각 모달을 닫는 것과 모달을 여는 것을 의미한다.

```html
<!-- Button trigger modal -->
<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
  Launch demo modal
</button>

<!-- Modal -->
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        ...
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>
```
## **정적 백드롭**
모달 윈도우는 배경을 클릭하면 닫힌다.  
`.modal`에 `data-bs-backdrop="static"` 속성을 추가하면 배경을 클릭해도 모달이 닫히지 않는다.

## **모달 스크롤**
모달 윈도우는 상황에 따라 자동으로 스크롤을 생성하는데, `.modal-dialog`에 `.modal-dialog-scrollable` 을 추가하면 모달 윈도우 내부적으로 스크롤이 가능해진다.

## **수직 중앙 출력**
모달은 기본적으로 뷰포트 상단에 출력되는데,  
`.modal-dialog`에 `.modal-dialog-centered` 를 추가하여 뷰포트 수직 가운데에 출력되도록 할 수 있다.

## **모달 포커스**
모달 내의 특정 요소가 focus 된 상태로 모달 윈도우가 출력되도록 할 수 있다. 이 기능은 JS를 통해 구현한다.
```js
// 모달
const myModal = document.querySelector('#exampleModal')
// focus할 요소
const myInput = document.querySelector('#exampleInputEmail1')

// 모달에 이벤트 리스너 추가
myModal.addEventListener('shown.bs.modal', function () {
  // 요소 포커스
  myInput.focus()
})
```

<br/>
<br/>

# **툴팁**
퍼포먼스를 위해 툴팁은 JS에서 직접 초기화 후 사용이 가능하다.

- 초기화
```js
// data-bs-toggle="tooltip" 요소를 찾아서 초기화를 진행한다.
const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
const tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})
```
- 툴팁 생성
```html
<button type="button" class="btn btn-secondary" data-bs-toggle="tooltip" data-bs-placement="top" title="Tooltip on top">
  Tooltip on top
</button>
<button type="button" class="btn btn-secondary" data-bs-toggle="tooltip" data-bs-placement="right" title="Tooltip on right">
  Tooltip on right
</button>
<button type="button" class="btn btn-secondary" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Tooltip on bottom">
  Tooltip on bottom
</button>
<button type="button" class="btn btn-secondary" data-bs-toggle="tooltip" data-bs-placement="left" title="Tooltip on left">
  Tooltip on left
</button>
```

<br/>
<br/>

# **테마 색상 커스텀**
npm으로 설치한 경우에 가능하다.

커스텀은 부트스트랩에서 할당된 기본값들을 재할당문을 통해 오버라이드하는 방식으로 진행된다.

커스텀 하기에 앞서 필요한 내용을 SCSS 파일로 import한다.  

부트스트랩 메인 파일보다 먼저 import 되어야 한다.

재할당문은 커스텀에 필요한 import문과 부트스트랩 메인 파일의 import문 사이에 작성된다.
```scss
// 커스텀에 필요한 파일 Import
@import "../node_modules/bootstrap/scss/functions";
@import "../node_modules/bootstrap/scss/variables";
@import "../node_modules/bootstrap/scss/mixins";

// 재할당을 통한 커스텀
$theme-colors: (
  "primary":    tomato,
  "secondary":  powderblue,
  "success":    $success,
  "info":       $info,
  "warning":    $warning,
  "danger":     $danger,
  "light":      $light,
  "dark":       $dark
);

// 부트스트랩 메인 파일 Import
@import "../node_modules/bootstrap/scss/bootstrap";
```

<br/>
<br/>

# **성능 최적화**
npm으로 설치한 경우 필요한 기능만 import하여 사용할 수 있다.

## **SCSS**
`""` 안의 내용을 `@import "../node_modules/bootstrap/scss/";` 뒤에 이어 붙여서 작성한다.  
다만 불안정한 부분이 있고 성능 차이도 크지 않기 때문에 스타일은 한 번에 모두 불러오는 것이 아직은 권장된다.
```scss
// configuraiton
// 기본적으로 먼저 불러온다.
@import "functions";
@import "variables";
@import "mixins";
@import "utilities";

// Layout & components
// 사용하지 않을 기능은 주석처리 혹은 삭제
@import "root";
@import "reboot";
@import "type";
@import "images";
@import "containers";
@import "grid";
@import "tables";
@import "forms";
@import "buttons";
@import "transitions";
@import "dropdown";
@import "button-group";
@import "nav";
@import "navbar";
@import "card";
@import "accordion";
@import "breadcrumb";
@import "pagination";
@import "badge";
@import "alert";
@import "progress";
@import "list-group";
@import "close";
@import "toasts";
@import "modal";
@import "tooltip";
@import "popover";
@import "carousel";
@import "spinners";
@import "offcanvas";
@import "placeholders";

// Helpers
@import "helpers";

// Utilities
@import "utilities/api";
```

<br/>

## **JavaScript**
JS에서 각 기능을 별도로 불러오기 위해서는 popper를 별도로 설치해야 한다.
`$ npm i @popperjs/core`
```js
// 사용하지 않을 기능은 주석처리 혹은 삭제
import 'bootstrap/js/dist/alert';
import 'bootstrap/js/dist/button';
import 'bootstrap/js/dist/carousel';
import 'bootstrap/js/dist/collapse';
import 'bootstrap/js/dist/dropdown';
import 'bootstrap/js/dist/modal';
import 'bootstrap/js/dist/offcanvas';
import 'bootstrap/js/dist/popover';
import 'bootstrap/js/dist/scrollspy';
import 'bootstrap/js/dist/tab';
import 'bootstrap/js/dist/toast';
import 'bootstrap/js/dist/tooltip';
```

위처럼 필요한 기능을 선택적으로 불러와서 사용할 경우 default export를 통해 내보내기가 된다. 따라서 불러온 기능별로 각각 초기화가 필요하다. 초기화를 위한 내용은 부트스트랩 홈페이지의 각 기능 탭에서 확인할 수 있다. 초기화 내용이 없을 경우 초기화가 필요 없는 기능이다.

- 드롭다운 불러오기 & 초기화 예시
```js
import Dropdown from "bootstrap/js/dist/dropdown";

const dropdownElementList = [].slice.call(document.querySelectorAll('.dropdown-toggle'));

// import명을 return한다.
// const dropdownList = 은 사용하지 않을 경우 생략이 가능하다.
const dropdownList = dropdownElementList.map(function (dropdownToggleEl) {
  return new Dropdown(dropdownToggleEl)
})
```

