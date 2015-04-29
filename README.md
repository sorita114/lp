# LOL 스킬데미지  
- Dev  

## 1. 구조  
> ..app/  
> ....components/  
> ......main/ //main 컨텐츠  
> ........controller.js //controller  
> ........view.html //view page  
> ....shared/ //공통 컨텐츠  
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
$ npm server
```  

localhost:8000 으로 실행된다.  

## 3. 히스토리  
  * 2015-04-29 구조 변경  
