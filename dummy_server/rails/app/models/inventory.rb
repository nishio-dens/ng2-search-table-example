# == Schema Information
#
# Table name: inventories
#
#  id         :integer          not null, primary key
#  name       :string(255)      not null
#  price      :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Inventory < ApplicationRecord
  include Ng2SearchTableSearchable

  RANSACK_FILTER_ATTRIBUTES = {
    id: :id_eq_any,
    name: :name_has_all_term,
    price: :price_eq
  }.with_indifferent_access.freeze
end
