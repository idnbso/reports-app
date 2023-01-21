import { HydratedDocument, Model } from 'mongoose';
import { ReportRecordsDTO } from './report-records';
import { ReportType } from './report-type.enum';
import { ReportDTO } from './report.dto';

export abstract class ReportServiceProvider<
  SchemaModelType,
  RecordDTOType extends ReportRecordsDTO,
> {
  constructor(
    private model: Model<HydratedDocument<SchemaModelType>>,
    private type: ReportType,
    private title: string,
  ) {}

  async createMany(records: RecordDTOType[]): Promise<number> {
    const recordsToSave = records.map((record) => new this.model(record));
    const result = await this.model.bulkSave(recordsToSave);
    return result.insertedCount;
  }

  async findAll(
    skipRows: number,
    pageRows: number,
  ): Promise<SchemaModelType[]> {
    return this.model
      .find({}, { _id: 0 })
      .skip(skipRows)
      .limit(pageRows)
      .exec();
  }

  async countAll(): Promise<number> {
    return this.model.count().exec();
  }

  async dropAll(): Promise<number> {
    const result = await this.model.deleteMany({}).exec();
    return result.deletedCount;
  }

  async getReport(skipRows: number, pageRows: number): Promise<ReportDTO<any>> {
    const [records, totalRecords] = await Promise.all([
      this.findAll(skipRows, pageRows),
      this.countAll(),
    ]);
    return {
      type: this.type,
      records,
      totalRecords,
      title: this.title,
    };
  }
}
