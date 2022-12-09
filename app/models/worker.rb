class Worker < ApplicationRecord
    validates :first_name, :last_name, :image, presence: true
end
