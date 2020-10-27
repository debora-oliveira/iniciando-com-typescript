class Pessoa{
    private nome:string;
    readonly cod = 15;
    constructor(nome:string){
        this.nome = nome;
    }

    set setNome(n:string){
        this.nome = n;
    }
    get getNome(){
        return this.nome;
    }
}

let p1 = new Pessoa("Luiza");
console.log(p1.getNome + ' '+ p1.cod);

interface Funcionario{
    salario:number;
    bonus?:number;
}

class Estagiario implements Funcionario{
    salario = 800;
    bonus = 150;
}
let est = new Estagiario();
console.log('salario total: '+ (est.salario+est.bonus));
