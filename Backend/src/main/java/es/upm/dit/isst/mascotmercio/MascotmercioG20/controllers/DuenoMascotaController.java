package es.upm.dit.isst.mascotmercio.MascotmercioG20.controllers;

import org.apache.catalina.connector.Response;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import es.upm.dit.isst.mascotmercio.MascotmercioG20.models.DuenoMascota;
import es.upm.dit.isst.mascotmercio.MascotmercioG20.services.DuenoMascotaService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestParam;

//Incompleto, desarrollando.
@RestController
@RequestMapping("/duenomascotas")
public class DuenoMascotaController {

    @Autowired
    DuenoMascotaService duenoMascotaService;

    @GetMapping("/{id}")
    public ResponseEntity<DuenoMascota> getDuenoMascota(@PathVariable Long id){
        DuenoMascota duenoMascota = duenoMascotaService.getDuenoMascotaById(id);
        return null;
    }
    
    
}
