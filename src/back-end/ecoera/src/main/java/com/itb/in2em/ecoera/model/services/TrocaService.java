package com.itb.in2em.ecoera.model.services;

import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.List;

import com.itb.in2em.ecoera.model.entity.troca;

public class trocaService {

    // Lista temporária de trocas 

    private static List<troca> trocaS = new ArrayList<>();

   
    static {

        troca p1 = new troca();
        p1.setId(1L);
        p1.setNome("Pizza Calabresa");
        p1.setValorVenda(BigDecimal.valueOf(45.90));

        troca p2 = new troca();
        p2.setId(2L);
        p2.setNome("Pizza Portuguesa");
        p2.setValorVenda(BigDecimal.valueOf(52.90));

        trocaS.add(p1);
        trocaS.add(p2);
    }

    // CREATE
    public troca salvar(troca troca) {

        Long novoId = gerarNovoId();
        troca.setId(novoId);

        trocaS.add(troca);

        return troca;
    }

    // READ - listar todos
    public List<troca> listarTodos() {
        return trocaS;
    }

    // READ - buscar por id
    public troca buscarPorId(Long id) {

        for (troca troca : trocaS) {

            if (troca.getId().equals(id)) {
                return troca;
            }
        }

        return null;
    }

    // UPDATE
    public troca atualizar(Long id, troca trocaAtualizado) {

        troca troca = buscarPorId(id);

        if (troca != null) {

            troca.setNome(trocaAtualizado.getNome());
            troca.setValorVenda(trocaAtualizado.getValorVenda());

            return troca;
        }

        return null;
    }

    // DELETE
    public boolean excluir(Long id) {

        troca troca = buscarPorId(id);

        if (troca != null) {
            trocaS.remove(troca);
            return true;
        }

        return false;
    }

    // Gera ID automático
    private Long gerarNovoId() {

        Long maiorId = 0L;

        for (troca troca : trocaS) {

            if (troca.getId() > maiorId) {
                maiorId = troca.getId();
            }
        }

        return maiorId + 1;
    }



}
