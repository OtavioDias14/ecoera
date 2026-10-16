package com.ecoera.service;

import com.ecoera.model.PontoReciclagem;
import com.ecoera.repository.PontoReciclagemRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PontoReciclagemService {

    private final PontoReciclagemRepository repository;

    public PontoReciclagemService(PontoReciclagemRepository repository) {
        this.repository = repository;
    }

    public List<PontoReciclagem> listarTodos() {
        return repository.findAll();
    }

    public PontoReciclagem buscarPorId(Long id) {
        return repository.findById(id)
                .orElseThrow(() -> new RuntimeException("Ponto de reciclagem não encontrado: " + id));
    }

    public PontoReciclagem salvar(PontoReciclagem ponto) {
        return repository.save(ponto);
    }

    public PontoReciclagem atualizar(Long id, PontoReciclagem dadosNovos) {
        PontoReciclagem ponto = buscarPorId(id);
        ponto.setNome(dadosNovos.getNome());
        ponto.setEndereco(dadosNovos.getEndereco());
        ponto.setCidade(dadosNovos.getCidade());
        ponto.setEstado(dadosNovos.getEstado());
        ponto.setCep(dadosNovos.getCep());
        ponto.setTelefone(dadosNovos.getTelefone());
        ponto.setHorarioFuncionamento(dadosNovos.getHorarioFuncionamento());
        ponto.setLatitude(dadosNovos.getLatitude());
        ponto.setLongitude(dadosNovos.getLongitude());
        ponto.setDescricao(dadosNovos.getDescricao());
        if (dadosNovos.getMateriais() != null) {
            ponto.setMateriais(dadosNovos.getMateriais());
        }
        return repository.save(ponto);
    }

    public void deletar(Long id) {
        repository.deleteById(id);
    }

    public List<PontoReciclagem> buscarPorCidade(String cidade) {
        return repository.findByCidade(cidade);
    }

    public List<PontoReciclagem> buscarPorNome(String nome) {
        return repository.findByNomeContainingIgnoreCase(nome);
    }
}