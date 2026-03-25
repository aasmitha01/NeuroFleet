package neurofleetx_backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import neurofleetx_backend.model.Vehicle;

public interface VehicleRepository extends JpaRepository<Vehicle,Long> {
}