(function(){
    angular.module('todo', [])
    .controller('ctrlSeguridad', fnSeguridad);

    // Function of Security.
    function fnSeguridad ($scope, $http) {
        console.log('entro al controlador');
        $scope.valor = 100;

        $scope.mostrar = function () {
            $scope.total = (($scope.valor * 2) / 3) * 5;
            $scope.obtenerDatos();
        }
        $scope.obtenerDatos = () => {
            $http.get('http://localhost:3007/seguridad/autenticacion/login/usuario').then(res => {
                console.log(res)
                $scope.objUser = res.data;

            }, err => {
                console.log(err)

            });
        }
        $scope.agregarUsuario = () => {
            $http.post('http://localhost:3007/seguridad/autenticacion/login/usuarios', $scope.objeto).then(res => {
                console.log(res)
                $scope.objUser = res.data;

            }, err => {
                console.log(err)

            });

        };
    };
    
})()