import { Transform } from "class-transformer";
import { IsNumber } from "class-validator";
import { transformToNumber } from "src/dto/utils/helper functions/transformToNumber.ts";

export class GetPostCommentLikesCountDTO {
  @Transform(({ value }) => transformToNumber(value), {
    toClassOnly: true,
  })
  @IsNumber()
  comment_id: number;
}