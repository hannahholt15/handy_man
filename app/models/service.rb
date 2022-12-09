class Service < ApplicationRecord
  belongs_to :worker
  validates :service_name, :s_type :location, presence: true
end
