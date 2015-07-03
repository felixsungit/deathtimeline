Rails.application.routes.draw do


  get 'about'   => 'static_pages#about'
  get 'contact' => 'static_pages#contact'

  root 'got_seasons#index'


end
