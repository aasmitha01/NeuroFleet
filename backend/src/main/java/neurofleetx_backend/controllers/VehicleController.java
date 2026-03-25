package neurofleetx_backend.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import neurofleetx_backend.model.Vehicle;
import neurofleetx_backend.service.VehicleService;
@RestController
@CrossOrigin
public class VehicleController {

    @Autowired
    VehicleService service;

    @GetMapping("/vehicles")
    public List<Vehicle> getVehicles(){
        return service.getVehicles();
    }

    @PostMapping("/vehicles")
    public Vehicle addVehicle(@RequestBody Vehicle v){
        return service.addVehicle(v);
    }
}