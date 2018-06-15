package com.tai.service;

import com.tai.domain.RandomCity;
import com.tai.domain.User;

import java.util.List;


public interface GenericService {
    User findByUsername(String username);

    List<User> findAllUsers();

    List<RandomCity> findAllRandomCities();
}
