"use strict";
var Pessoa = /** @class */ (function () {
    function Pessoa(nome) {
        this.cod = 15;
        this.nome = nome;
    }
    Object.defineProperty(Pessoa.prototype, "setNome", {
        set: function (n) {
            this.nome = n;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Pessoa.prototype, "getNome", {
        get: function () {
            return this.nome;
        },
        enumerable: false,
        configurable: true
    });
    return Pessoa;
}());
var p1 = new Pessoa("Luiza");
console.log(p1.getNome + ' ' + p1.cod);
var Estagiario = /** @class */ (function () {
    function Estagiario() {
        this.salario = 800;
        this.bonus = 150;
    }
    return Estagiario;
}());
var est = new Estagiario();
console.log('salario total: ' + (est.salario + est.bonus));
