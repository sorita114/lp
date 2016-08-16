# LOL 스킬데미지  
- Dev  

## 1. 구조  
> ..app/  
> ....components/  
> ......home  
> ........homeController.js  
> ........homeService.js  
> ........homeView.html    
> ......main/ //main 컨텐츠  
> ........controller.js //controller  
> ....shared/ //공통 컨텐츠  
> ......carousel //slider directive  
> ........carouselDirective.js  
> ........carouselView.html  
> ......dialog //dialog directive  
> ........dialogDirective.js  
> ........dialogView.html  
> ....app.module.js  
> ....app.routes.js  
> ..asseets/  
> ....img/ //이미지나 아이콘 폴더  
> ....css/ //스타일시트  
> ....js/ //angular 모듈을 제외한 스크립트 파일  
> ....libs/ //외부 참조 라이브러리  
> ..index.html  

## 2. 설치  
1) bower 설치  
> jquery 와 angularjs 소스 관리를 위해 bower를 사용하였다.  

```  
$ npm install -g bower  
$ bower install  
```  

2) node 모둘 설치  
> 모듈 빌드 관리를 위해서 grunt 를 사용하였고, 라우터를 사용하기 위해서 express 를 사용하였다.  

```  
$ npm install  
```

## 3. 빌드  
  * grunt 를 사용하여 빌드  

## 4. 서버  
node 서버사용  

```  
$ node server
```  

## 3. 히스토리  
  * 2015-04-29 구조 변경  
  * 2015-04-29 server css 경로 수정. type 변경  
  * 2015-05-04 api 연결 test  
  * 2015-05-12 api  추가 및 수정
  * 2015-05-13 실제 데이터 추출 및 화면 프로토 타입  
  * 2015-11-19 브런치 생성 0.0.3  
  * 2015-12-30 브런치 생성 0.0.4  
  * 2015-12-30 메인 - 영웅 스킨 api 추가  
  * 2015-12-30 node server global 변수 추가  
  * 2016-02-29 main page edit and infiniteScroll 적용  
  * 2016-06-13 main page 수정 / main list 검색 기능 추가 / server 수정  
  * 2016-06-22 main page - skin / detail 기능 추가  , base.css 추가, 스타일 수정  
  * 2016-08-12 프로젝트 구조 변경  
  * 2016-08-12 directive 분리  
  * 2016-08-12 불필요한 브런치 삭제  
  * 2016-08-16 utils 컨버팅 작업 중 / 구조변경 및 mainController , mainService 추가, 컨트롤러 내 $scope -> this 로 변경 등등  
