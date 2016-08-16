create_table :inventories, default_charset: :utf8mb4, collate: :utf8mb4_general_ci, auto_increment: 1000, row_format: :dynamic do |t|
  t.int :id, primary_key: true, extra: :auto_increment
  t.varchar :status, default: "inactive"
  t.varchar :name, comment: "InventoryName"
  t.int :price

  t.datetime :created_at
  t.datetime :updated_at
end

create_table 'schema_migrations', collate: 'utf8_bin' do |t|
  t.varchar 'version'

  t.index 'version', name: 'unique_schema_migrations', unique: true
end

create_table :ar_internal_metadata, collate: :utf8_bin do |t|
  t.varchar :key
  t.varchar :value
end
