import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { ListaDeProjetos, Datas } from "./styled";
import LinkTexto from '../LinkTexto';

const formatDate = (dateString) => {
  const options = {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',  // Corrigir o erro de digitação aqui
    second: '2-digit'
  };
  return new Date(dateString).toLocaleString('pt-BR', options);
};

const token = import.meta.env.VITE_NETLIFY_TOKEN;

const NetlifyData = () => {
  const [sites, setSites] = useState([]);
  const [siteBuilds, setSiteBuilds] = useState({});

  useEffect(() => {
    const fetchSites = async () => {
      try {
        const response = await axios.get('https://api.netlify.com/api/v1/sites', {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        setSites(response.data);
      } catch (error) {
        console.error('Erro ao buscar sites:', error);
      }
    };

    fetchSites();
  }, []);

  const fetchBuilds = async (siteId) => {
    try {
      const response = await axios.get(`https://api.netlify.com/api/v1/sites/${siteId}/builds`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      return response.data;
    } catch (error) {
      console.error(`Erro ao buscar builds do site ${siteId}:`, error);
      return [];
    }
  };

  return (
    <ListaDeProjetos>
      {sites.map((site) => {
        console.log('Variáveis disponíveis para o site:', site);
        return (
          <li key={site.id}>
            <LinkTexto local={site.ssl_url}>
              <h3>{site.name}</h3>
              <Datas>
                <p>Criado: {formatDate(site.created_at)}</p>
                <p>Atualizado: {formatDate(site.updated_at)}</p>
              </Datas>
              <img src={site.screenshot_url} alt={`imagem ${site.name}`} />
            </LinkTexto>
          </li>
        )
      })}
    </ListaDeProjetos>
  );
};

export default NetlifyData;
