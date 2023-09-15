import React from "react"
import { ListaProdutos } from "../Components/ListaProdutos";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AdicionarProdutos(){
    document.title = 'Adicionar Produtos'

    const navegador = useNavigate();

    const [produtos,setProdutos] = useState({
        nome:'',
        preco:''
    });

    const handleChange = (e)=>{
        const {name,value} = e.target;
        setProdutos({...produtos,[name]:[value]})
    }

    const handleAdd = (e)=>{
        e.preventDefault()
        ListaProdutos.push({
            id: ListaProdutos.length +1,
            ...produtos
        }) 
        alert('Seu produto foi adicionado com sucesso!')
        navegador('/produtos')
    }




    

    
    return (
        <>
          <div>
            <h1>Editar Produtos</h1>
            <div>
              <form>
                <fieldset>
                  <legend>Produto Selecionado</legend>
                  <div>
                    <input type="hidden" name="id"/>
                  </div>
                  <div>
                    <label htmlFor="idNome">Nome:</label>
                    <input onChange={handleChange} type="text" value={produtos.nome} name="nome" id="idNome" />
                  </div>
                  <div>
                    <label htmlFor="idPreco">Preço:</label>
                    <input type="number" onChange={handleChange} value={produtos.preco} name="preco" id="idPreco" />
                  </div>
                  <div>
                    <button className="send" onClick={handleAdd}>ADICIONAR</button>
                  </div>
                </fieldset>
              </form>
            </div>
          </div>
        </>
    )
    
}