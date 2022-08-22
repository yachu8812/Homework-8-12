package com.example.springwebservice.service;

import com.example.springwebservice.controller.dto.request.CreateUserRequest;
import com.example.springwebservice.controller.dto.request.UpdateUserRequest;
import com.example.springwebservice.model.Entity.User;
import com.example.springwebservice.model.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    List<User> userList;


    public List<User> getUserList() {

        List<User> response = userRepository.findAll();

        return response;
    }

    public User getUserById(int id) {

        User response = userRepository.findById(id);

        return response;
    }

    public String createUser(CreateUserRequest request) {

        //新增一個空的 user 的 Entity
        User user = new User();

        int createId = request.getId();
        if(null != userRepository.findById(createId)){
            return "Had This User";
        }

        //放入資料: user 從 request 拿資料
        user.setId(request.getId());
        user.setName(request.getName());
        user.setAge(request.getAge());

        //存入DB
        userRepository.save(user);

        //告訴 Controller 已存入 DB
        return "Save Success";
    }

    public String updateUser(int id, UpdateUserRequest request) {

        //確認有沒有這筆資料
        User user = userRepository.findById(id);

        if(null == user){
            return "Not Found User";
        }
        user.setName(request.getName());
        user.setAge(request.getAge());

        //存入DB
        userRepository.save(user);

        //告訴 Controller 已存入 DB
        return "OK";
    }

    public String deleteUserById(int id) {

        User user = userRepository.findById(id);

        if(null == user){
            return "Not Found User";
        }

        Long count = userRepository.deleteById(id);

        return "OK";
    }

} // Class end
