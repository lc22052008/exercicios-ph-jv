const cliente0 = {
    nome: "Robson",
    idade: 29,
    cpf: "05086678086",
    email: "robinho@polo.com.br",
  };

  const cliente1 = {
    nome: "Lucas",
    idade: 50,
    cpf: "12345678998",
    email: "vaisaber@polo.com.br"
  }

  const cliente2 = {
    nome: "Robinho",
    idade: 29,
    cpf: "15086678086",
    email: "robinho@polo.com.br",
  };

  const cliente3 = {
    nome: "Luquinhas",
    idade: 50,
    cpf: "22345678998",
    email: "vaisaber@polo.com.br"
  }


  const tabela2 = ["nome", "idade", "cpf", "email"];
  tabela2.forEach((tabela2) => {
    console.log(`O campo ${tabela2} tem valor ${cliente2[tabela2]}`);
  });
  
  const chave0 = ["nome", "idade", "cpf", "email"];
  chave0.forEach((chave0) => {
    console.log(`O campo ${chave0} tem valor ${cliente1[chave0]}`);
  });

  const chave1 = ["nome", "idade", "cpf", "email"];
  chave1.forEach((chave1) => {
    console.log(`O campo ${chave1} tem valor ${cliente0[chave1]}`);
  });
  const tabela0 = ["nome", "idade", "cpf", "email"];
  tabela0.forEach((tabela0) => {
    console.log(`O campo ${tabela0} tem valor ${cliente3[tabela0]}`);
  });

