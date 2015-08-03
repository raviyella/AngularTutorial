namespace AngularTutotial.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class CreateTodoIndexes : DbMigration
    {
        public override void Up()
        {
            AlterColumn("dbo.todoes","Text", c => c.String(maxLength:800));
            foreach (string col in new[] { "Text", "DueDate", "Priority" })
            {
                CreateIndex("todoes", col);
            }
        }
        
        public override void Down()
        {
        }
    }
}
