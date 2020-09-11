 const URL="https://covid19.mathdro.id/api";
 
 let app=angular.module("MyApp",[]);
 app.controller("MyCntrl",($scope,$http)=>{
     $scope.title="Stay Home Stay Safe";
    //  $scope.changeVal=()=>{
    //      $scope.title="Corona Finished";
    //  };

    $http.get(URL).then((response)=>{
        //success
        console.log(response.data);

        $scope.all_data=response.data;
    },(error)=>{
        //failure

    });

    //https://covid19.mathdro.id/api   see data in format

    //get country data
    $scope.get_c_data=()=>{
        let country=$scope.country;
        if(country==""){
            $scope.c_data=undefined;
            return;
        }
        $http.get(`${URL}/countries/${country}`)
        .then((response)=>{
            $scope.c_data=response.data;
        },
        (error)=>{
            console.log(error);
        });
    };
 });

