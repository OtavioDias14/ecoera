package com.ecoera.controller;

import com.ecoera.model.Recompensa;
import com.ecoera.service.RecompensaService;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/recompensas")
public class RecompensaController {

    private final RecompensaService service;

    public RecompensaController(RecompensaService service) {
        this.service = service;
    }

    @GetMapping
    public List<Recompensa> listarTodas() {
        return service.listarTodas();
    }

    @GetMapping("/{id}")
    public Recompensa buscarPorId(@PathVariable Long id) {
        return service.buscarPorId(id);
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public Recompensa criar(@RequestBody Recompensa recompensa) {
        return service.salvar(recompensa);
    }

    @PutMapping("/{id}")
    public Recompensa atualizar(@PathVariable Long id, @RequestBody Recompensa recompensa) {
        return service.atualizar(id, recompensa);
    }

    @DeleteMapping("/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void deletar(@PathVariable Long id) {
        service.deletar(id);
    }
}