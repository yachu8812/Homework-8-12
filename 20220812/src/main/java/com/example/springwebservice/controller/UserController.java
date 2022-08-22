package com.example.springwebservice.controller;

import com.example.springwebservice.controller.dto.request.CreateUserRequest;
import com.example.springwebservice.controller.dto.request.UpdateUserRequest;
import com.example.springwebservice.controller.dto.response.StatusResponse;
import com.example.springwebservice.model.Entity.User;
import com.example.springwebservice.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/user")
@CrossOrigin("*")
public class UserController {

    @Autowired
    UserService userService;

    /**全部使用者*/
    @GetMapping()
    public List<User> getUserLists() {

        List<User> response = userService.getUserList();

        return response;
    }
    /**特定使用者*/
    @GetMapping("/{id}")
    public User getUserById(@PathVariable int id) {

        User response = userService.getUserById(id);

        return response;
    }

    /**新增使用者 StatusResponse*/
    @PostMapping()
    public StatusResponse createUser(@RequestBody CreateUserRequest user) {

        String response = userService.createUser(user);

        return new StatusResponse(response);
    }

    /**更新使用者*/
    @CrossOrigin
    @PutMapping("/{id}")
    public StatusResponse updateUser(@PathVariable int id, @RequestBody UpdateUserRequest user) {

        String response = userService.updateUser(id,user);

        return new StatusResponse(response);
    }

    /**刪除使用者*/
    @DeleteMapping("/{id}")
    public StatusResponse deleteUserById(@PathVariable int id) {
        String response = userService.deleteUserById(id);

        return new StatusResponse(response);
    }
} // Class end
