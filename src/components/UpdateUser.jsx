"use client";

import { authClient } from "@/lib/auth-client";
import {Envelope} from "@gravity-ui/icons";
import {Button, Input, Label, Modal, Surface, TextField} from "@heroui/react";
import {Edit, User} from 'lucide-react'


export function UpdateUser() {

    const handleSubmit =async (e)=>{
        e.preventDefault()
        const name = e.target.name.value 
        const image = e.target.image.value 
        
        await authClient.updateUser({name,image})
    }
  return (
    <Modal>
      <Button variant="secondary">Update Profile <Edit/> </Button>
      <Modal.Backdrop>
        <Modal.Container placement="auto">
          <Modal.Dialog className="sm:max-w-md">
            <Modal.CloseTrigger />
            <Modal.Header>
              <Modal.Icon className="bg-accent-soft text-accent-soft-foreground">
                <User className="size-5" />
              </Modal.Icon>
              <Modal.Heading>Update User</Modal.Heading>
            
            </Modal.Header>
            <Modal.Body className="p-6">
              <Surface variant="default">
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  <TextField className="w-full" name="name" type="text">
                    <Label>Name</Label>
                    <Input placeholder="Enter your name" />
                  </TextField>
                  <TextField className="w-full" name="image" type="text">
                    <Label>Image Url</Label>
                    <Input placeholder="Enter your Image url" />
                  </TextField>
             <Modal.Footer>
              <Button slot="close" variant="secondary">
                Cancel
              </Button>
              <Button type="submit" slot="close">Update</Button>
            </Modal.Footer>
                </form>
              </Surface>
            </Modal.Body>
           
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  );
}