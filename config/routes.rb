Rails.application.routes.draw do
  resources :superheros

  root 'superheros#index'
end
