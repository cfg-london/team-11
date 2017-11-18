@extends('layouts.app')

@section('content')
    <div class="container">
        <div class="row">
            <div class="col-md-8 col-md-offset-2">
                <div class="panel panel-default">
                    <div class="panel-heading">Dashboard</div>

                    <div class="panel-body">

                        <table style="width:100%">
                            <tr>
                                <th style="margin-right:10px;margin-left:10px">Urgency</th>
                                <th style="margin-right:10px;margin-left:10px">Type</th>
                                <th style="margin-right:10px;margin-left:10px">Reference_id</th>
                            </tr>
                            @foreach($archives as $archive)
                                <tr>
                                    <td style="margin-right:10px;margin-left:10px">{{ urldecode($archive->urgency) }}</td>
                                    <td style="margin-right:10px;margin-left:10px">{{ urldecode($archive->type) }}</td>
                                    <td style="margin-right:10px;margin-left:10px">{{ urldecode($archive->referee_id) }}</td>
                                </tr>
                            @endforeach

                        </table>

                    </div>
                </div>
            </div>
        </div>
@endsection
