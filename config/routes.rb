Rails.application.routes.draw do
  namespace :api do 
    resources :workers do
      resources :services
    end
    # resources :workers, except: [:index, :show, :create, :update, :destroy] do
    #   resources :services
    # end
  end
end
