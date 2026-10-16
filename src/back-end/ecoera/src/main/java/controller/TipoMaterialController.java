package com.ecoera.controller;

import com.ecoera.model.TipoMaterial;
import com.ecoera.service.TipoMaterialService;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/materiais")
public class TipoMaterialController {

    private final TipoMaterialService service;

    public TipoMaterialController(TipoMaterialService service) {
        this.service = service;
    }

    @GetMapping
    public List<TipoMaterial> listarTodos() {
        return service.listarTodos();
    }

    @GetMapping("/{id}")
    public TipoMaterial buscarPorId(@PathVariable Long id) {
        return service.buscarPorId(id);
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public TipoMaterial criar(@RequestBody TipoMaterial material) {
        return service.salvar(material);
    }

    @PutMapping("/{id}")
    public TipoMaterial atualizar(@PathVariable Long id, @RequestBody TipoMaterial material) {
        return service.atualizar(id, material);
    }

    @DeleteMapping("/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void deletar(@PathVariable Long id) {
        service.deletar(id);
    }
}
