import React, { useState, useEffect, FormEvent } from "react";
import { FiChevronRight } from "react-icons/fi";
import { Link } from "react-router-dom";
import api from "../../services/api";

import { Title, Form, Box, Card1, Card2} from "./style";

interface Character {
    id: string;
    name: string;
    thumbnail:{
        path: string;
        extension: string;
    };
  }

const Dashboard: React.FC = () => {
    const [characters, setCharacters] = useState<Character []> ([]);

    useEffect (() => {
      api
        .get('/characters')
        .then(response => {
          setCharacters(response.data.data.results);
        })
        .catch(err => console.log(err));
    }, [])

    return (
        <>
            <Title>Personagens Marvel</Title>

            <Form>
                <input value= {characters} onChange={e => setCharacters(e.target.value)} placeholder="Digite o nome de um personagem..."/>
                <button type="submit">Pesquisar</button>
            </Form>

          <Box>
            <Card1>
                {characters.map(characters => {
                    return (
                        <Card2 key = {characters.id}>
                            <div id="img" />
                                <img src={`${characters.thumbnail.path}.${characters.thumbnail.extension}`}/>
                                <strong>{characters.name}</strong>
                        </Card2>
                    )
                })}
            </Card1>
          </Box>
        </>
    );
};

export default Dashboard;