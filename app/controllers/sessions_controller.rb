class SessionsController < ApplicationController
  
    skip_before_action :authorize, only: :create

    def create
        user = User.find_by(username: params[:username])
        if user&.authenticate(params[:password])
            session[:user_id] = user.id
            render json: user, include: ['vending_machines', 'vending_machines.inventories', 'vending_machines.inventories.snack', 'vending_machines.inventories.vending_machine']
        else
            render json: { errors: ["Invalid username or password"] }, status: :unauthorized
        end
    end

    def destroy
        session.delete :user_id
        head :no_content
    end      

end
