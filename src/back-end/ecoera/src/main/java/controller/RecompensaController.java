package controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import model.Recompensa;
import service.RecompensaService;

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
    public ResponseEntity<Recompensa> buscarPorId(@PathVariable Long id) {
        try {
            return ResponseEntity.ok(service.buscarPorId(id));
        } catch (RuntimeException e) {
            // O serviço lança RuntimeException quando a recompensa năo existe
            return ResponseEntity.notFound().build();
        }
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