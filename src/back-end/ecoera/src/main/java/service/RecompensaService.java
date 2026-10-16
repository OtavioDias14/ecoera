package com.ecoera.service;

import com.ecoera.model.Recompensa;
import com.ecoera.repository.RecompensaRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class RecompensaService {

    private final RecompensaRepository repository;

    public RecompensaService(RecompensaRepository repository) {
        this.repository = repository;
    }

    public List<Recompensa> listarTodas() {
        return repository.findAll();
    }

    public Recompensa buscarPorId(Long id) {
        return repository.findById(id)
                .orElseThrow(() -> new RuntimeException("Recompensa não encontrada: " + id));
    }

    public Recompensa salvar(Recompensa recompensa) {
        return repository.save(recompensa);
    }

    public Recompensa atualizar(Long id, Recompensa dadosNovos) {
        Recompensa recompensa = buscarPorId(id);
        recompensa.setNome(dadosNovos.getNome());
        recompensa.setDescricao(dadosNovos.getDescricao());
        recompensa.setCustoPontos(dadosNovos.getCustoPontos());
        recompensa.setImagemUrl(dadosNovos.getImagemUrl());
        return repository.save(recompensa);
    }

    public void deletar(Long id) {
        repository.deleteById(id);
    }
}