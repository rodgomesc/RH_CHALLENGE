class CreateJobRoles < ActiveRecord::Migration[5.1]
  def change
    create_table :job_roles do |t|
      t.string :title

      t.timestamps
    end
  end
end
