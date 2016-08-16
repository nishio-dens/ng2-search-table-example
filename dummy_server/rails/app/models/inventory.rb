# == Schema Information
#
# Table name: inventories
#
#  id         :integer          not null, primary key
#  status     :string(255)      default("inactive"), not null
#  name       :string(255)      not null
#  price      :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Inventory < ApplicationRecord
  include Ng2SearchTableSearchable

  RANSACK_FILTER_ATTRIBUTES = {
    id: :id_eq_any,
    status: :status_eq,
    name: :name_has_all_term,
    priceFrom: :price_gteq,
    priceTo: :price_lteq,
  }.with_indifferent_access.freeze
end
