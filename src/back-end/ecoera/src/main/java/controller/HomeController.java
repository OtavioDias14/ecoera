package com.ecoera.controller;

import com.ecoera.repository.PontoReciclagemRepository;
import com.ecoera.repository.TipoMaterialRepository;
import com.ecoera.repository.TrocaRepository;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/api/home")
public class HomeController {

    private final PontoReciclagemRepository pontosRepo;
    private final TipoMaterialRepository materiaisRepo;
    private final TrocaRepository trocasRepo;

    public HomeController(PontoReciclagemRepository pontosRepo,
                          TipoMaterialRepository materiaisRepo,
                          TrocaRepository trocasRepo) {
        this.pontosRepo = pontosRepo;
        this.materiaisRepo = materiaisRepo;
        this.trocasRepo = trocasRepo;
    }

    @GetMapping
    public Map<String, Object> resumo() {
        Map<String, Object> resposta = new HashMap<>();
        resposta.put("totalPontosColeta", pontosRepo.count());
        resposta.put("totalMateriais", materiaisRepo.count());
        resposta.put("totalTrocas", trocasRepo.count());
        return resposta;
    }
}
