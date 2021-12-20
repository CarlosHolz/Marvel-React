import React, { useState, useEffect, FormEvent } from "react";
import { FiChevronRight } from "react-icons/fi";
import { Link } from "react-router-dom";
import api from "../../services/api";

import { Title, Form, Card1, Card2} from "./style";

interface Characters {
    id: string;
    name: string;
    thumbnail:{
        path: string;
        extension: string;
    };
  }

const Dashboard: React.FC = () => {
    const [newChar, setNewChar] = useState('');
    const [inputError, setInputError] = useState('');
    const [characters, setCharacters] = useState <Characters[]>  (() => {
    const storageRepository = localStorage.getItem('@Marvel:characters',)

    if (storageRepository) {
        return JSON.parse(storageRepository)
      }
  
      return []
    })
  
    const searchCharacters = async () => {
      if (!newChar) {
        setInputError('Digite um Personagem da Marvel para pesquisar')
        return
      }
  
      try {
        const response = await api.get(`character/${newChar}/`)
        const character = response.data
  
        setCharacters([...characters, character])
        setNewChar('')
      } catch (err) {
        setInputError('Personagem não encontrado.')
        setNewChar('')
      }
    }
  
      useEffect(() => {
      localStorage.setItem('@Pokemons', JSON.stringify(characters))
    }, [characters])

    return (
        <>
            <Title>Personagens Marvel</Title>

            <Form onSubmit={searchCharacters}>
                <input value= {newChar} onChange={e => setNewChar(e.target.value)} placeholder="Digite o nome de um personagem..."/>
                <button type="submit">Pesquisar</button>
            </Form>

            <Card1>
                {characters.map(character => {
                    return (
                        <Card2 key = {character.id}>
                            <div id="img" />
                                <img src={`${character.thumbnail.path}.${character.thumbnail.extension}`} alt="{`${character.thumbnail.path}.${character.thumbnail.extension}`}" />
                                <strong>{character.name}</strong>
                        </Card2>
                    )
                })}
            </Card1>
        </>
    );
};

export default Dashboard;