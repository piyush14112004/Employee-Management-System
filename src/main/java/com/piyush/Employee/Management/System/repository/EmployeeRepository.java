

package com.piyush.Employee.Management.System.repository;

import com.piyush.Employee.Management.System.entity.Employee;
import org.springframework.data.jpa.repository.JpaRepository;

public interface EmployeeRepository extends JpaRepository<Employee, Long> {
}
