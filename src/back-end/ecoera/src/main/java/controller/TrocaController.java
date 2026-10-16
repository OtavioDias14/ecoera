package com.ecoera.controller;

import com.ecoera.model.Troca;
import com.ecoera.service.TrocaService;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/trocas")
public class TrocaController {

    private final TrocaService service;

    public TrocaController(TrocaService service) {
        this.service = service;
    }

    @GetMapping
    public List<Troca> listarTodas() {
        return service.listarTodas();
    }

    @GetMapping("/status/{status}")
    public List<Troca> listarPorStatus(@PathVariable String status) {
        return service.listarPorStatus(status);
    }

    @GetMapping("/{id}")
    public Troca buscarPorId(@PathVariable Long id) {
        return service.buscarPorId(id);
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public Troca criar(@RequestBody Troca troca) {
        return service.salvar(troca);
    }

    @PutMapping("/{id}/concluir")
    public Troca concluir(@PathVariable Long id) {
        return service.concluir(id);
    }

    @DeleteMapping("/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void deletar(@PathVariable Long id) {
        service.deletar(id);
    }
}
