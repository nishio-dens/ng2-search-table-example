Ransack.configure do |config|
  config.add_predicate 'has_all_term',
  arel_predicate: 'matches_all',
  formatter: proc { |v| v.scan(/\"(.*?)\"|(\w+)/).flatten.compact.map{ |t| "%#{t}%"} },
  validator: proc { |v| v.present? },
  type: :string
end
