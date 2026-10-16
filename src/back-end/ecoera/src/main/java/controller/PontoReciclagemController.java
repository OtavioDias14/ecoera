package com.ecoera.controller;

import com.ecoera.model.PontoReciclagem;
import com.ecoera.service.PontoReciclagemService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/pontos")
public class PontoReciclagemController {

    private final PontoReciclagemService service;

    public PontoReciclagemController(PontoReciclagemService service) {
        this.service = service;
    }

    @GetMapping
    public List<PontoReciclagem> listarTodos() {
        return service.listarTodos();
    }

    @GetMapping("/{id}")
    public ResponseEntity<PontoReciclagem> buscarPorId(@PathVariable Long id) {
        return ResponseEntity.ok(service.buscarPorId(id));
    }

    @GetMapping("/cidade/{cidade}")
    public List<PontoReciclagem> buscarPorCidade(@PathVariable String cidade) {
        return service.buscarPorCidade(cidade);
    }

    @GetMapping("/buscar")
    public List<PontoReciclagem> buscarPorNome(@RequestParam String nome) {
        return service.buscarPorNome(nome);
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public PontoReciclagem criar(@RequestBody PontoReciclagem ponto) {
        return service.salvar(ponto);
    }

    @PutMapping("/{id}")
    public PontoReciclagem atualizar(@PathVariable Long id, @RequestBody PontoReciclagem ponto) {
        return service.atualizar(id, ponto);
    }

    @DeleteMapping("/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void deletar(@PathVariable Long id) {
        service.deletar(id);
    }
}
