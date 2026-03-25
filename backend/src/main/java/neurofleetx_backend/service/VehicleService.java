package neurofleetx_backend.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import neurofleetx_backend.model.Vehicle;
import neurofleetx_backend.repository.VehicleRepository;

@Service
public class VehicleService {

    @Autowired
    VehicleRepository repo;

    public List<Vehicle> getVehicles(){
        return repo.findAll();
    }

    public Vehicle addVehicle(Vehicle v){
        return repo.save(v);
    }
}